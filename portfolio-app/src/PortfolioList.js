import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PortfolioItem from './PortfolioItem';
import sizes from './sizes';
import ColoursAppImage from './imgs/ColoursApp.png';
import GameDevImage from './imgs/GameDev.png';
import PokemonImage from './imgs/PokemonApp.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: "2rem",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: '#b7b7b7',
    overflow: "scroll"
    /* background by SVGBackgrounds.com */
  },
  container: {
    width: "70%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "nowrap",
    [sizes.down("xl")]: {
      width: "80%"
    },
    [sizes.down("xs")]: {
      width: "70%"
    }
  },
  items: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2,50%)"
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1,100%)",
      gridGap: "1rem"
    }
  }
}));

export default function PortfolioList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.items}>
          <PortfolioItem img={GameDevImage} title="Game Dev Portfolio" url="https://jonnymarx98.github.io/#portfolio"/>
          <PortfolioItem img={ColoursAppImage} title="React Colours App" url="https://jonnymarx98.github.io/React-colour-app/" />
          <PortfolioItem img={PokemonImage} title="React Pokemon App" url="https://jonnymarx98.github.io/React-Bootcamp/" />
        </div>
        
      </div>
    </div>
    
  )
}