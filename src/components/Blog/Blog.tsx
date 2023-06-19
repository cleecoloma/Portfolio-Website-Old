import React from 'react';
import { Container } from "react-bootstrap";
import { VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import blogElementsList from "../Blog/blogElementsList.json";

type blogElementsListProps = {
  id: number;
  date: string;
  location: string;
  description: string;
}

function Blog() {
  return (
    <Container>
      <h1>Blog</h1>
      <VerticalTimeline>
        {blogElementsList.toReversed().map((blog) => {
          return (
            <VerticalTimelineElement
            key= {blog.id}
            date= {blog.date}
            >
              <h3>
                {blog.title}
              </h3>
              <h5>
                {blog.location}
              </h5>
              <p>{blog.description}</p>
            </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
      <hr />
    </Container>
  );
}

export default Blog
