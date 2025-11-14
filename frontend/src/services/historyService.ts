import { ConsultationRecord } from '../types';
import { ApiService } from './api';

export class BackendHistoryService {
  /**
   * Recupera o histórico de consultas via backend usando ApiService
   */
  async getConsultationHistory(): Promise<ConsultationRecord[]> {
    try {
      console.log('🔄 Carregando histórico via backend...');
      
      const response = await ApiService.getConsultations();
      
      if (response.success) {
        const consultations = response.consultations;
        console.log(`📊 Histórico carregado: ${consultations.length} registros`);
        
        // Mapear dados do backend para o formato esperado pelo frontend
        return consultations.map((consultation: any): ConsultationRecord => ({
          id: consultation.id,
          timestamp: new Date(consultation.timestamp),
          transcript: consultation.transcription || consultation.transcript || '',
          result: {
            diagnosis: consultation.diagnosis || '',
            diseases: Array.isArray(consultation.diseases) ? consultation.diseases : [],
            exams: Array.isArray(consultation.exams) ? consultation.exams : [],
            medications: Array.isArray(consultation.medications) ? consultation.medications : []
          }
        }));
      } else {
        console.error('❌ Backend retornou erro:', response.message);
        return [];
      }
    } catch (error) {
      console.error('❌ Erro ao carregar histórico via backend:', error);
      throw error;
    }
  }

  /**
   * Recupera uma consulta específica via backend
   */
  async getConsultation(consultationId: string): Promise<ConsultationRecord | null> {
    try {
      // Por enquanto, vamos usar getConsultationHistory e filtrar
      // TODO: Adicionar endpoint específico no backend se necessário
      const consultations = await this.getConsultationHistory();
      const consultation = consultations.find(c => c.id === consultationId);
      return consultation || null;
    } catch (error) {
      console.error('❌ Erro ao carregar consulta:', error);
      return null;
    }
  }

  /**
   * Deleta uma consulta via backend usando ApiService
   */
  async deleteConsultation(consultationId: string): Promise<void> {
    try {
      await ApiService.deleteConsultation(consultationId);
      console.log('✅ Consulta deletada via backend');
    } catch (error) {
      console.error('❌ Erro ao deletar consulta:', error);
      throw error;
    }
  }

  /**
   * Obtém estatísticas do histórico
   */
  async getHistoryStats(): Promise<{
    totalConsultations: number;
    lastConsultation?: Date;
    mostCommonDiseases: string[];
  }> {
    try {
      // Usar a mesma rota de consultas para calcular estatísticas
      const history = await this.getConsultationHistory();
      
      const totalConsultations = history.length;
      const lastConsultation = history.length > 0 ? history[0].timestamp : undefined;
      
      // Calcular doenças mais comuns
      const diseaseCount: { [key: string]: number } = {};
      history.forEach(record => {
        record.result.diseases.forEach(disease => {
          diseaseCount[disease] = (diseaseCount[disease] || 0) + 1;
        });
      });
      
      const mostCommonDiseases = Object.entries(diseaseCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([disease]) => disease);
      
      return {
        totalConsultations,
        lastConsultation,
        mostCommonDiseases
      };
    } catch (error) {
      console.error('❌ Erro ao carregar estatísticas:', error);
      return {
        totalConsultations: 0,
        mostCommonDiseases: []
      };
    }
  }

  /**
   * Testa conectividade com o backend
   */
  async testBackendConnection(): Promise<boolean> {
    try {
      console.log('🧪 Testando conexão com backend...');
      // Usar o método de consultas para testar a conexão
      await ApiService.getConsultations(1);
      console.log('✅ Conexão com backend OK');
      return true;
    } catch (error) {
      console.error('❌ Erro na conexão com backend:', error);
      return false;
    }
  }
}

// Instância singleton
export const historyService = new BackendHistoryService();