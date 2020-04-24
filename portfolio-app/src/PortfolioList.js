import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PortfolioItem from './PortfolioItem';
import sizes from './sizes';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: '#097ddb',
    overflow: "scroll"
    /* background by SVGBackgrounds.com */
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    // flexWrap: "nowrap",
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
          <PortfolioItem/>
          <PortfolioItem/>
          <PortfolioItem/>
          <PortfolioItem/>
        </div>
        
      </div>
    </div>
    
  )
}