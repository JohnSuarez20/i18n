import React from "react";
import { FormattedDate, FormattedNumber, FormattedMessage } from "react-intl";

const Job = (props) => {
  const salaryText =
    props.offer.salary >= 1 ? (
      <FormattedMessage
        id="salary_million"
        values={{
          salary: props.offer.salary,
          million: props.offer.salary === 1 ? "millón" : "millones",
        }}
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
      <td>
        <FormattedNumber value={props.offer.views} /> {/* Formato con separadores de miles */}
      </td>
    </tr>
  );
};

export default Job;


export default Job;
