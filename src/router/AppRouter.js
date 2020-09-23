import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Loading } from "../components/Loading";
import { ContactoScreen } from "../components/pages/ContactoScreen";
import { CursosScreen } from "../components/pages/CursosScreen";
import { ParticleComponent } from "../components/ParticleComponent";
import { ParticleComponentMovil } from "../components/ParticleComponentMovil";
import { TextoScreen } from "../components/TextoScreen";
import { Nav } from "../navbar/Nav";

export const AppRouter = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="App__container">
          <Router>
            <Nav />

            {width >= "768" ? (
              <ParticleComponent />
            ) : (
              <ParticleComponentMovil />
            )}
            <Switch>
              <Route exact path="/cursos" component={CursosScreen}>
                <CursosScreen />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/contacto" component={ContactoScreen}>
                <ContactoScreen />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/" component={TextoScreen}>
                <TextoScreen />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
};
