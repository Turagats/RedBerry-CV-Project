import axios from "axios";

const CVFormAPI = () => {
  const inputPosition = sessionStorage.getItem("position" || "");
  const inputEmployer = sessionStorage.getItem("employer" || "");
  const inputStartingDate = sessionStorage.getItem("starting-date" || "");
  const inputEndingDate = sessionStorage.getItem("ending-date" || "");
  const inputAboutJob = sessionStorage.getItem("about-job" || "");
  const inputEducational = sessionStorage.getItem("educational" || "");

  const inputAboutEducation = sessionStorage.getItem("about-education" || "");
  const inputName = sessionStorage.getItem("name") || "";
  const inputLastName = sessionStorage.getItem("lastname" || "");
  const inputaboutMe = sessionStorage.getItem("aboutme" || "");
  const inputEmail = sessionStorage.getItem("email" || "");
  const inputMobile = sessionStorage.getItem("mobile" || "");
  const photo = sessionStorage.getItem("profile-photo" || null);
  // const [finalPhoto, setFinalPhoto] = useState(null);
  const photoAPI = sessionStorage.getItem("profile-photo-API");
  // const imageBlob = new Blob(photo);
  // const reader = new FileReader();

  // reader.readAsDataURL(imageBlob);

  // fot photo upload


  // inputDegree = Number(inputDegree)
 

  let blobPhoto;

  fetch(photo)
    .then((res) => res.blob())
    .then((blob) => (blobPhoto = blob));

  const handleUpload = () => {
    console.log("asdasd", photo);
    console.log(photoAPI);

    let inputDegree = Number(sessionStorage.getItem("degree_id" || ""));
    const inputEducationEndingDate = sessionStorage.getItem(
      "education-ending-date" || ""
    );

    let formData = {
      name: inputName,
      surname: inputLastName,
      email: inputEmail,
      phone_number: inputMobile,
      experiences: [
        {
          position: inputPosition,
          employer: inputEmployer,
          start_date: inputStartingDate,
          due_date: inputEndingDate,
          description: inputAboutJob,
        },
      ],
      educations: [
        {
          institute: inputEducational,
          degree_id: inputDegree,
          due_date: inputEducationEndingDate,
          description: inputAboutEducation,
        },
      ],
      image: photo,
      about_me: inputaboutMe,
    };

    const formImageData = new FormData();
    formImageData.append("name", formData.name);
    formImageData.append("surname", formData.surname);
    formImageData.append("email", formData.email);
    formImageData.append("phone_number", formData.phone_number);
    // formImageData.append("experiences", formData.experiences);

    formImageData.append(
      "experiences[0][position]",
      formData.experiences[0].position
    );
    formImageData.append(
      "experiences[0][employer]",
      formData.experiences[0].employer
    );
    formImageData.append(
      "experiences[0][start_date]",
      formData.experiences[0].start_date
    );
    formImageData.append(
      "experiences[0][due_date]",
      formData.experiences[0].due_date
    );
    formImageData.append(
      "experiences[0][description]",
      formData.experiences[0].description
    );

    formImageData.append(
      "educations[0][institute]",
      formData.educations[0].institute
    );
    formImageData.append(
      "educations[0][degree_id]",
      formData.educations[0].degree_id
    );
    formImageData.append(
      "educations[0][due_date]",
      formData.educations[0].due_date
    );
    formImageData.append(
      "educations[0][description]",
      formData.educations[0].description
    );

    // const photoBlob = new Blob(photo, "multipart/form-data")
    // console.log(photoBlob)

    formImageData.append("image", blobPhoto);
    formImageData.append("about_me", formData.about_me);

    axios
      .post("https://resume.redberryinternship.ge/api/cvs", formImageData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        sessionStorage.setItem("response", response.data )
        sessionStorage.setItem('data', JSON.stringify(response.data));
        window.location.href = "/resumes";
      })
      .catch((error) => console.log(error));
  };

  // const handleChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  // const handleSubmit = () => {
  // event.preventDefault();
  // axios
  //   .post("https://resume.redberryinternship.ge/api/cvs", formData)
  //   .then((response) => {
  //     console.log(response);
  //   })
  //   .catch((error) => console.log(error));

  // console.log(formData + "gagzavnamde2");
  // setFormData({
  //   ...formData,
  // });
  // console.log(formData + "final");
  // event.preventDefault();
  // fetch("https://resume.redberryinternship.ge/api/cvs", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: "kvercia",
  // })
  //   .then((response) => response.text())
  //   .then((data) => {
  //     console.log("Success:", data);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
  // };

  return (
    <div>
      {/* <Link to="/resumes"> */}
      <button className="button-finish" type="submit" onClick={handleUpload}>
        ???????????????????????????
      </button>

      {/* </Link> */}
      {/* <input type="file" onChange={handleFileChange} /> */}
      {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
};

export default CVFormAPI;
