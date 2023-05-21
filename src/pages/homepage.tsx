import Card from "../components/Card";
import Layout from "../layout/Layout";
import todoFuntions from "../components/Todo/todoFunctions";

export default function HomePage() {
  return (
    <Layout>
      <div className="grid gap-4 lg:grid-cols-2 grid-cols-1">
        <Card
          title="The first task title"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et"
        />
        <Card
          title="The second task title"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet"
        />
        <Card
          title="The third task title"
          desc="Lorem ipsum dolor sit amet, consetetur sadipscing elitr"
        />
      </div>
    </Layout>
  );
}
