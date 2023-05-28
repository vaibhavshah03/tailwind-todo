import Card from "../components/Card";
import Layout from "../layout/Layout";
import { useTodo } from "../store";

export default function HomePage() {
  const { state } = useTodo();

  return (
    <Layout>
      <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
        {state.todoDisplay.map((todo) => (
          <Card data={todo} key={todo.id} />
        ))}
      </div>
    </Layout>
  );
}
