import {
  Body,
  Card,
  CardHead,
  CardBody,
  CardImg,
  CardTitle,
  CardTag,
  CardPublishedDate,
  CardContent,
  CardUser,
  CardUserAvatar,
  CardUserName,
} from './style/style';

const BlogPreviewCardMain = () => {
  return (
    <Body>
      <Card>
        <CardHead>
          <CardImg />
        </CardHead>
        <CardBody>
          <CardTag>Learning</CardTag>
          <CardPublishedDate>Published 21 dec 2023</CardPublishedDate>
          <CardTitle>HTML & CSS foundations</CardTitle>
          <CardContent>
            Thes languages are the backbone of every website, defining
            structure, contetnt, and presentation
          </CardContent>

          <CardUser>
            <CardUserAvatar />
            <CardUserName>Greg Hooper</CardUserName>
          </CardUser>
        </CardBody>
      </Card>
    </Body>
  );
};

export default BlogPreviewCardMain;
