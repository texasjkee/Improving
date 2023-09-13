import { FC } from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

interface AppProps {};

const App: FC<AppProps> = ({}) => {

  return (
    <>
      <Header />
      <Banner />
    </>
  )
}

export default App;