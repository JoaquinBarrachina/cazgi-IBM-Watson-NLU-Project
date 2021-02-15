import React from "react";
import "./bootstrap.min.css";

class EmotionTable extends React.Component {
  render() {
    let emotions = Object.keys(this.props.emotions);
    return (
      <div>
        {/*You can remove this line and the line below. */}
        {/*JSON.stringify(this.props.emotions)*/}
        {console.log(Object.keys(this.props.emotions))}
        <table className="table table-bordered">
          <tbody>
            {
              //Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
              emotions.map((emotion) => {
                return (
                  <tr key={emotion}>
                    <td>{emotion}</td>
                    <td>{this.props.emotions[emotion]}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
export default EmotionTable;
