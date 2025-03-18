import CharactersList from "@/components/character-list";

const Home = () => {
  return (
    <div className="p-3">
      <main>
        <section className="grid gap-2 lg:grid-cols-2 my-3">
          <CharactersList listId={"ch1"} title="Character #1" />
          <CharactersList listId={"ch2"} title="Character #2" />
        </section>
      </main>
    </div>
  );
};

export default Home;
