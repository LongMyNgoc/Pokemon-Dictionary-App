import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Pokemon } from '@/types/Pokemon';

export function useFetchPokemonForms(name: string) {
  const [forms, setForms] = useState<Pokemon[]>([]); // KHÔNG dùng null
  const [loading, setLoading] = useState(true);

  // Hàm refetch để làm mới dữ liệu
  const refetch = useCallback(async () => {
    if (!name) return;

    setLoading(true); // Đặt lại trạng thái loading trước khi fetch
    try {
      const response = await axios.get(`https://pokemon-dictionary-be-production.up.railway.app/pokemon_form_by_name/${name}`);
      setForms(response.data);
    } catch (error) {
      setForms([]); // Nếu không có form thì trả về mảng rỗng
    } finally {
      setLoading(false);
    }
  }, [name]); // Hàm refetch phụ thuộc vào `name`

  useEffect(() => {
    refetch(); // Khi `name` thay đổi, gọi lại `refetch` để tải lại dữ liệu
  }, [name, refetch]); // Hook sẽ chạy khi `name` thay đổi

  return { forms, loading, refetch };
}
