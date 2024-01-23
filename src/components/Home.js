import Notes from "./Notes";

const Home = (props) => {
  return (
    <>
      <Notes showalert={props.showalert} />
    </>
  );
};

export default Home;
