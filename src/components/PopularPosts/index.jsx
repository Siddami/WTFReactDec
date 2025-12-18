import "./PopularPosts.css";
import posts from "../../data/posts.json";
import Card, { CardHeader, CardContent, CardFooter } from "../Card";
import Button from "../Button";
import Arrow from "../../assets/icons/arrow.svg?react";
import PurpleArrow from "../../assets/icons/purple-arrow.svg?react";
import Calendar from "../../assets/icons/calendar.svg?react";
import Comment from "../../assets/icons/comment.svg?react";

const PopularPosts = () => {
  return (
    <section className="PopularPosts">
      {/* Section header */}
      <div className="PopularPosts__header">
        <div>
          <span className="heading">Blog Post</span>
          <h2>Most Popular Post.</h2>
        </div>

        <Button
          variant="primary"
          rounded={true}
          radius="rounded-md"
          size="lg"
          suffix={<Arrow />}
        >
          All Blog Post
        </Button>
      </div>

      {/* Cards */}
      <div className="PopularPosts__grid">
        {posts.map((post) => (
          <Card key={post.id} className="post-card">
            <CardHeader className="post-card__header">
              <img src={post.image} alt={post.title} />
            </CardHeader>

            <CardContent className="post-card__content">
              <div className="post-meta">
                <span>
                  <Calendar />
                  {post.date}
                </span>
                <span>
                  <Comment />
                  Comment ({post.comments})
                </span>
              </div>

              <h3 className="post-title">{post.title}</h3>
            </CardContent>

            <CardFooter className="post-card__footer">
              <Button suffix={<PurpleArrow />} rounded={true} radius="rounded-md" size="lg" variant="light-purple">
                Read More
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PopularPosts;
