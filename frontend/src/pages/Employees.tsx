import { useState, useEffect } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import axios from 'axios';
import toast from 'react-hot-toast';
import EmployeeForm from '../components/EmployeeForm';

interface Employee {
  id: number;
  nome: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  cargo: string;
  email: string;
  telefone: string;
  dataCadastro: string;
}

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/funcionarios');
      setEmployees(response.data);
    } catch (error) {
      toast.error('Falha ao buscar funcionários');
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Tem certeza de que deseja excluir este funcionário?')) {
      try {
        await axios.delete(`http://localhost:8080/api/funcionarios/${id}`);
        toast.success('Funcionário deletado com sucesso');
        fetchEmployees();
      } catch (error) {
        toast.error('Falha ao excluir funcionário');
      }
    }
  };

  const handleEdit = (employee: Employee) => {
    setEditingEmployee(employee);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Funcionários</h1>
        <button
          onClick={() => {
            setEditingEmployee(null);
            setShowForm(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>Adicionar funcionário</span>
        </button>
      </div>

      {showForm && (
        <EmployeeForm
          employee={editingEmployee}
          onClose={() => {
            setShowForm(false);
            setEditingEmployee(null);
          }}
          onSuccess={() => {
            setShowForm(false);
            setEditingEmployee(null);
            fetchEmployees();
          }}
        />
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">CPF</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">RG</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Cargo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Telefone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-black uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap">{employee.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.nome}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.cpf}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.rg}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.cargo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.telefone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(employee)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Pencil className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(employee.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;