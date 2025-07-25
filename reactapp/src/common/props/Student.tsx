interface StudentProps {
  name: string;
  age: number;
  isStudent: boolean;
}
function Student(studenobj: StudentProps) {
  return (
    <>
      <div className="studentprops">
        <p> Name : {studenobj.name}</p>
        <p> Age : {studenobj.age}</p>
        <p> Is Student : {studenobj.isStudent}</p>
      </div>
    </>
  );
}
export default Student;
