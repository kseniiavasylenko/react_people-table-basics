import { Link } from 'react-router-dom';
import { Person } from '../types/Person';

type Props = {
  person: Person;
};

export const PersonLink = ({ person }: Props) => {
  const isWoman = person.sex === 'f';

  return (
    <tr>
      <td>
        <Link
          to={`/people/${person.slug}`}
          className={isWoman ? 'has-text-danger' : ''}
        >
          {person.name}
        </Link>
      </td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>{person.motherName}</td>
      <td>{person.fatherName}</td>
    </tr>
  );
};
