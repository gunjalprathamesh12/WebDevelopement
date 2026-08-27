const post = [
  {
    username: "john",
    content: "hello world",
    likes: 100,
    comments: ["nice post", "well done"],
  },
  {
    username: "jane",
    content: "javascript is great",
    likes: 150,
    comments: ["I agree", "very informative"],
  },
];

post.forEach((products) => {
  console.log(`username: ${products.username}`);
  console.log(`content: ${products.content}`);
  console.log(`likes: ${products.likes}`);
  console.log(`comments: ${products.comments}`);
  console.log("********************");
});
