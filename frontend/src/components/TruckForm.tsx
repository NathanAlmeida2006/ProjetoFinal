import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast';
import { X } from 'lucide-react';

interface TruckFormProps {
  truck?: any;
  onClose: () => void;
  onSuccess: () => void;
}

interface TruckFormData {
  placa: string;
  modelo: string;
  cor: string;
  fabricante: string;
  numeroChassis: string;
  capacidadeCarga: number;
}

const TruckForm = ({ truck, onClose, onSuccess }: TruckFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<TruckFormData>({
    defaultValues: truck || {}
  });

  const onSubmit = async (data: TruckFormData) => {
    try {
      if (truck) {
        await axios.put(`http://localhost:8080/api/caminhoes/${truck.id}`, data);
        toast.success('Caminhão atualizado com sucesso');
      } else {
        await axios.post('http://localhost:8080/api/caminhoes', data);
        toast.success('Caminhão criado com sucesso');
      }
      onSuccess();
    } catch (error) {
      toast.error('Falha ao salvar o caminhão');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{truck ? 'Editar Caminhão' : 'Adicionar novo caminhão'}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Licença da placa</label>
            <input
              {...register('placa', { required: 'Licença da placa é obrigatória' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.placa && <p className="mt-1 text-sm text-red-600">{errors.placa.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Modelo</label>
            <input
              {...register('modelo', { required: 'Modelo é obrigatório' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.modelo && <p className="mt-1 text-sm text-red-600">{errors.modelo.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Cor</label>
            <input
              {...register('cor', { required: 'Cor é obrigatória' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.cor && <p className="mt-1 text-sm text-red-600">{errors.cor.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Fabricante</label>
            <input
              {...register('fabricante', { required: 'Fabricante é obrigatório' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.fabricante && <p className="mt-1 text-sm text-red-600">{errors.fabricante.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Número do chassi</label>
            <input
              {...register('numeroChassis', { required: 'Número de chassi obrigatório' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.numeroChassis && <p className="mt-1 text-sm text-red-600">{errors.numeroChassis.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-black">Capacidade de carga(tons)</label>
            <input
              type="number"
              step="0.1"
              {...register('capacidadeCarga', { required: 'Capacidade de carga é obrigatória' })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            {errors.capacidadeCarga && <p className="mt-1 text-sm text-red-600">{errors.capacidadeCarga.message}</p>}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {truck ? 'Atualizar' : 'Criar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TruckForm;