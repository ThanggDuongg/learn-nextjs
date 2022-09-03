import axios from "axios";
import { todo } from "../models/todo";

export interface IUser02Props {
  data: todo[] | undefined,
}

export default function User02 (props: IUser02Props) {
  const {data} = props;

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

export async function getStaticProps() {
  const result = await axios(
    'https://jsonplaceholder.typicode.com/todos',
  );

  return {
    props: {
      data: result.data,
    }
  }
}
