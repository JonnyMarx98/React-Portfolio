import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ColoursAppImage from './imgs/ColoursApp.png';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    "&:hover svg": {
      opacity: "1"
    }
  },
  inner: {
    backgroundColor: "#dae1e4",
    height: "200px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
    textAlign: "center",
    fontSize: "1.4rem",
    fontWeight: "400"
  },
  img: {
    width: "100%",
    height: "75%"
    // maxHeight: "100%"
    // display: "block"
  }
}));

export default function PortfolioItem({img, title, url}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.inner}>
      
        <a className={classes.imgContainer} href={url}>
          <img className={classes.img} src={img} alt={title} />
        </a>
        {title}
      </div>
    </div>
  )
}
