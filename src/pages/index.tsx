import { type NextPage } from "next";
import { Fragment } from "react";
import NewTweetForm from "~/components/NewTweetForm";

const Home: NextPage = () => {
  return (
    <Fragment>
      <header className="sticky top-0 z-10 border-b bg-white">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
      </header>
      <NewTweetForm />
    </Fragment>
  );
};

export default Home;
