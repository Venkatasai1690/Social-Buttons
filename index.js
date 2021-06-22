function Button(props) {
  //   Write your code here.
  const { className, children } = props;
  return <button className={className}>{children}</button>;
}

const element = (
  //   Write your code here.
  <div>
    <div className="bg-container">
      <h1 className="heading">Social Buttons</h1>
      <div>
        <Button className="button button1" children="Like" />
        <Button className="button button2" children="Comment" />
        <Button className="button button3" children="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
S;
