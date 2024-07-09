import React, { useState, useCallback } from 'react';
import ProfileImage from "../../assets/dashboard/profile.svg"
import Pencil from "../../assets/dashboard/pencil.svg"
import Photo from "../../assets/dashboard/photo.png"
import DashboardLeft from './DashboardLeft'
import { useDropzone } from 'react-dropzone';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ProfileUpdateModal from './ProfileUpdateModal';
import Keyskills from './Keyskills';
import Employment from './Employment';
import Worksample from './Worksample';
import Education from './Education';
import Addcertificate from './Addcertificate';

const Profile = () => {
    const [profilePic, setProfilePic] = useState(ProfileImage);
    const [editMode, setEditMode] = useState(false);
    const [modal, setModal] = useState(false);
    const [uploadedFileName, setUploadedFileName] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [filePreview, setFilePreview] = useState(null);
    const toggle = () => setModal(!modal);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
                setEditMode(false);
            };
            reader.readAsDataURL(file);
        }
    };


    const handleProfileImageClick = () => {
        setEditMode(true);
    };
    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        if (rejectedFiles.length > 0) {
            setErrorMessage('File size exceeds 2 MB');
            setUploadedFileName('');
            setUploadedFile(null);
            setFilePreview(null);
        } else {
            const file = acceptedFiles[0];
            if (file) {
                setUploadedFileName(file.name);
                setUploadedFile(file);
                setErrorMessage('');
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (file.type.startsWith('image/')) {
                        setFilePreview(reader.result);
                    } else {
                        setFilePreview(null);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: onDrop,
        accept: '.doc,.docx,.rtf,.pdf,.jpg,.jpeg,.png,.webp',
        maxSize: 2 * 1024 * 1024 // 2 MB
    });

    const handleRemoveFile = () => {
        setUploadedFileName('');
        setUploadedFile(null);
        setErrorMessage('');
        setFilePreview(null);
    };
    return (
        <div>
            <Navbar />
            <section style={{ backgroundColor: "#f8fbfe" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 position-sticky top-0">
                            <DashboardLeft />
                        </div>
                        <div className="col-lg-9 py-3 " style={{ height: "100vh", overflowY: "scroll", scrollbarWidth: "none", paddingTop: "20px", paddingBottom: "20px", "WebkitScrollbar": { display: "none" } }}>
                            <h4 className='mb-5'>My Profile</h4>
                            <div className="profile-container text-center p-3 bg-white">
                                <div className="profile-top">

                                    <div className="profile-image main-pro" onClick={handleProfileImageClick}>
                                        <div className="prof-con">
                                            <img src={profilePic} alt="Profile" className='profile-pic' style={{ height: "100px", width: "100px", borderRadius: "50px", objectFit: "cover" }} />
                                            <div className="overlay"></div>
                                        </div>
                                        {editMode && (
                                            <div className="edit-overlay">
                                                <input
                                                    type="file"
                                                    id="profilePicInput"
                                                    accept="image/*"
                                                    onChange={handleFileChange}
                                                    style={{ display: 'none' }}
                                                />
                                                <label htmlFor="profilePicInput">
                                                    <img src={Photo} alt="Edit Profile Picture" className='clone' height={"24px"} width={"24px"} />
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                    <div className="profile-details">
                                        <span>saurbh Panchal</span>
                                        <p>Update your Profile <span><img src={Pencil} alt="Edit" onClick={toggle} style={{ cursor: 'pointer' }} /></span></p>
                                    </div>

                                </div>
                                <div className="icon-container">
                                    <div className="profile-overview d-flex justify-content-around m-2 ">
                                        <div className="icon-box d-flex justify-content-center gap-2 align-items-center text-start">
                                            <i className="fa fa-location-dot "></i>
                                            <p>Pune</p>
                                        </div>
                                        <div className="icon-box d-flex justify-content-center gap-2 align-items-center">
                                            <i className="fa fa-wallet"></i>
                                            <p>₹8 Lacs P.A.</p>
                                        </div>
                                        <div className="icon-box d-flex justify-content-center gap-2 align-items-center">
                                            <i className="fa fa-phone"></i>
                                            <p>9876765456</p>
                                        </div>
                                    </div>
                                    <div className="profile-overview d-flex justify-content-around my-3">
                                        <div className="icon-box d-flex justify-content-center gap-2 align-items-center">
                                            <i className="fa fa-briefcase"></i>
                                            <p>3 yrs</p>
                                        </div>
                                        <div className="icon-box d-flex justify-content-center gap-2 align-items-center">
                                            <i className="fa fa-envelope"></i>
                                            <p>surbhipanchal@gmail.com</p>
                                        </div>
                                        <div className="icon-box d-flex justify-content-center gap-2 align-items-center">
                                            <i className="fa fa-building"></i>
                                            <p>HCL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`drop-cv d-flex justify-content-center gap-3 flex-column align-items-center my-5 ${isDragActive ? 'drag-active' : ''}`}>
                                {errorMessage ? (
                                    <h4 style={{ color: 'red' }}>{errorMessage}</h4>
                                ) : (
                                    <h4>{uploadedFileName || ''}</h4>
                                )}
                                <div
                                    {...getRootProps()}
                                    className={`upload-resume-btn ${isDragActive ? 'active' : ''}`}
                                    style={{
                                        cursor: 'pointer'
                                    }}
                                >
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <p style={{ textAlign: 'center' }}>Drop the files here...</p>
                                    ) : (
                                        <div>
                                            <p className='text-dark'>Already have a resume?  <span style={{ color: "#275DF5" }}>Upload resume </span>  </p>
                                            <p>  Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
                                        </div>
                                    )}
                                </div>
                                {uploadedFile && (
                                    <div className="uploaded-file-preview" style={{ position: 'relative', display: 'inline-block' }}>
                                        {filePreview && (
                                            <img src={filePreview} alt="File Preview" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                        )}
                                        <button onClick={handleRemoveFile} style={{ position: 'absolute', top: '-12px', right: '-9px', background: 'black', fontSize: '12px', padding: '2px 4px', color: 'white', border: 'none', borderRadius: '50%', cursor: 'pointer' }}>X</button>
                                    </div>
                                )}
                            </div>
                            <div className="profile-skills">
                                <Keyskills />
                            </div>
                            <div className="profile-employment">
                                <Employment />
                            </div>
                            <div className="profile-worksample">
                                <Worksample />
                            </div>
                            <div className="profile-education">
                                <Education />
                            </div>
                            <div className="profile-certification">
                                <Addcertificate />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <ProfileUpdateModal isOpen={modal} toggle={toggle} />
        </div>
    )
}

export default Profile
