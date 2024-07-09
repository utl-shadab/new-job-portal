import React from 'react';
import './working.css';
import Person from '../../assets/small-icon/person.png';
import Upload from '../../assets/small-icon/upload.png';
import Edit from '../../assets/small-icon/edit.png';
import Work from '../../assets/small-icon/work.png';

const imageMap = {
    'Acount Create': Person,
    'Create Resume': Edit,
    'Apply Jobs': Upload,
    'Find Jobs': Work,
};

const classMap = {
    'Acount Create ': 'account',
    'Create Resume': 'create-resume',
    'Apply Jobs': 'apply-jobs',
    'Find Jobs': 'find-jobs',
};

const descriptions = {
    'Acount Create': 'To create your account be confident & safely.',
    'Create Resume': 'To create your account be confident & safely.',
    'Apply Jobs': 'To create your account be confident & safely.',
    'Find Jobs': 'To create your account be confident & safely.',
};

const WorkingProcess = () => {
    const working = [
        'Acount Create',
        'Create Resume',
        'Find Jobs',
        'Apply Jobs',
    ];

    return (
        <section className="py-5 bg-primary">
            <div className="container">
                    <div className="subtitle-working text-white">
                        Jobs Working Process
                    </div>
                <div className="row">
                    {working.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6">
                            <div className={`category-item bg-items  text-center ${classMap[item]}`}>
                                <img src={imageMap[item]} className='work-img' alt={item} />
                                <p className="my-2 fw-bold text-dark">{item}</p>
                                <div className="description">
                                    <span className="text-secondary">{descriptions[item]}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkingProcess;
