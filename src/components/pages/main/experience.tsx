import ExpBox from '@components/exp-box'
import { CompanyArray } from '@constant/company-array'

const Experience = () => {
  return (
    <div id="Experience" className="w-full py-4">
      <br />
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">🧑‍💻 Experience.</h2>
      <br />

      {[...CompanyArray].reverse().map((company) => (
        <ExpBox key={company.id} company={company} />
      ))}
    </div>
  )
}

export default Experience
