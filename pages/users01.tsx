import axios from 'axios';
import { useEffect, useState } from 'react';
import { todo } from '../models/todo';

export interface IUser01Props {
}

export default function User01 (props: IUser01Props) {
  const [data, setData] = useState<todo[]|undefined>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/todos',
      );
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && data.map(item => (
        <li key={item.id}>
          <h1>{item.title}</h1>
        </li>
      ))}
    </div>
  );
}
