import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const NewsItem = ({title, description, urlToImage, newsUrl , source, date, mode}) => {
   
    return (
      <div className="news-Item ">
        <Card 
        bg={mode==='dark'? 'dark' : 'light'}
        text={mode==='dark'? 'light' : 'dark'}
        style={{
          height : '600px', 
          marginBottom : '16px'
          }}>
          <Card.Img style={{height : '250px'}} variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text >
             {description && description.length > 150 ? `${description.substring(0, 200)}...` : description}
            </Card.Text>
            <div style={{position: 'absolute' , bottom: '4px'}}>
            <Button  variant='primary' href={newsUrl} target="_blank" className="btn-lg">Read more</Button>
            <Card.Footer text={mode==='dark'? 'light' : 'dark'} className="text-muted my-2">By {source.name ? source.name : "Unknown"} on {new Date(date).toGMTString()}</Card.Footer>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
}

export default NewsItem;
