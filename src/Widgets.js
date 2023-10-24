import React from 'react';
import "./Widgets.css";
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = ( heading, subtitle ) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>

        </div>
        )

  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("Anjos Creative is Coming", "Top news - 9899 readers")}
        {newsArticle("Coronavirus: UK", "Top news - 889 readers")}
        {newsArticle("Tesla hits new highs", "Cars & auto - 300 readers")}
        {newsArticle("Bitcoin Breaks $22k", "Crypto - 8000 readers")}
        {newsArticle("Is Redux too good?", "Code - 123 readers")}
        {newsArticle("Anjos Creative Launching a Youtube Channel", "Top news - 700 readers")}

    </div>
  );
}

export default Widgets;