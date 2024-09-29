import React from "react";
import { FormattedDate, FormattedMessage } from "react-intl";

const Job = (props) => {
  const salaryText = props.offer.salary >= 1 ? (
    <FormattedMessage
      id="salary_million"
      values={{ salary: props.offer.salary }}
    />
  ) : (
    props.offer.salary
  );

  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>{salaryText}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year="numeric"
          month="long"
          day="numeric"
          weekday="long"
        />
      </td>
      <td>{props.offer.views.toLocaleString()}</td> {/* Formato de número con separadores */}
    </tr>
  );
};

export default Job;
