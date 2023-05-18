import ExpBox from '@components/exp-box';
import { CompanyArray } from '@constant/CompanyArray';
import styled from '@emotion/styled';

const Experience = () => {
  return (
    <Wrap id="Experience">
      <br />
      <h2>🧑‍💻 Experience.</h2>
      <br />

      {CompanyArray.map((company) => (
        <ExpBox key={company.id} company={company} />
      ))}
    </Wrap>
  );
};

const Wrap = styled.div`
  //min-height: 100vh;
  padding: 1rem 0;
`;

export default Experience;
