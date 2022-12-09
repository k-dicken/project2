export default function DetailMain(props) {
  return (
    <div className="details-container">
      <p className="details-name-secondary">{props.data.nameTranslation}</p>
      <div className="details-main">
        <span
          className="details-name-primary"
          style={{
            color: props.data.color,
            fontSize:
              50 / props.data.nameOriginal.length < 15
                ? 50 / props.data.nameOriginal.length + "vh"
                : 15 + "vh",
          }}
        >
          {props.data.nameOriginal}
        </span>
        <div className="desc">
          <a href={props.data.wiki}>{props.data.nameTranslation}</a>{" "}
          {props.data.description}
        </div>
        <div className="main-container">
          <div className="border"></div>
          <div className="info">
            <table>
              <tbody>
                <tr>
                  <th>Release Date</th>
                  <td>
                    {props.data.releaseDate.month} {props.data.releaseDate.year}
                  </td>
                </tr>
                <tr>
                  <th>Company</th>
                  <td>{props.data.company}</td>
                </tr>
                <tr>
                  <th>Voice Provider</th>
                  <td>{props.data.voiceProvider}</td>
                </tr>
                <tr>
                  <th>Programs</th>
                  <td>
                    {props.data.programs.map((program, index) => {
                      return <span key={index}>{program}</span>;
                    })}
                  </td>
                </tr>
                <tr>
                  <th>Languages</th>
                  <td>
                    {props.data.languages.map((language, index) => {
                      return <span key={index}>{language}</span>;
                    })}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="button-container">
          <button
            className="close-button"
            style={{ color: props.data.color }}
            onClick={() => {
              props.closeDetail();
              // setActiveVersion(0);
            }}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
}
