
import './dept.css';


export default function Deptid({ params }: { params: { deptid: string } }) {
  return (
    <>
     <br></br>
      <div className="container">
        <h1 className="mt-5">
         Department of <span className="dept">{params.deptid}</span><br></br>
        </h1>
        <hr />
        <div className="row mt-4">
          <div className="col">
            <p>
              <br></br>
              The Department of <span className="dept">{params.deptid}</span> is established with the inception of the college in the year 2001. It administers bachelor's programs in <span className="dept">{params.deptid}</span> with an intake of 180 students, as well as master's programs in <span className="dept">{params.deptid}</span> with an intake of 30 students.
            </p>
            <p>
              We are very proud to say that few students are studying in our department from various countries like Nepal, Nigeria, and from different parts of India. For better placements, we have signed MOUs with various standard assessment organizations like Co Cubes, AMCAT, Elitmus. Our college has a strong technical team (Technical hub) to train our students in coding practices and problem-solving skills. We are happy to say that our college has a Pearson certified center and we are associated with many MNCs like Oracle Academy, CISCO, Infosys Campus Connect, SAP Student Academy Program, Red Hat Academy, Skill Development Center (APSSDC) etc. Most of our students have been trained and certified in various new technologies and trends which are necessary in the current industries right from the first year onwards. We are proud to share that many of our students have been placed in dream companies with packages of more than 10 lakhs. And on average, our students are placed with a package of around 5 lakhs over the last two years.
            </p>
            <p>
              One of the key factors of our department is our faculty. We have 10 PhDs in our department, and the remaining faculty members are pursuing PhDs in various reputed universities. Our faculty members are actively involved in publishing their research articles in various reputed journals and conferences.
            </p>
            <table className="table mt-5">
              <tbody>
                <tr>
                  <td>Number of Faculty</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>Number of Students Passed Till Now</td>
                  <td>5000</td>
                </tr>
                <tr>
                  <td>Number of Placements Till Now</td>
                  <td>4000</td>
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
