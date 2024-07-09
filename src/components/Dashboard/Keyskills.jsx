import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Input } from 'reactstrap';
import './dashboard.css';

const Keyskills = () => {
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const allSkills = [
    'HTML', 'HTML5', 'CSS', 'C', 'C#', 'JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Swift', 'Kotlin', 
    'TypeScript', 'SQL', 'NoSQL', 'MongoDB', 'MySQL', 'PostgreSQL', 'SQLite', 'Django', 'Flask', 'Spring', 'React',
    'Vue', 'Angular', 'Node.js', 'Express', 'ASP.NET', 'Laravel', 'Symfony', 'Rails', 'SASS', 'LESS', 'Bootstrap', 
    'Tailwind CSS', 'Material-UI', 'Ant Design', 'GraphQL', 'REST', 'SOAP', 'JSON', 'XML', 'JQuery', 'AJAX', 'Redux', 
    'MobX', 'RxJS', 'Next.js', 'Nuxt.js', 'Gatsby', 'Gridsome', 'WordPress', 'Drupal', 'Joomla', 'Shopify', 'Magento', 
    'WooCommerce', 'BigCommerce', 'Squarespace', 'Wix', 'Weebly', 'Git', 'GitHub', 'GitLab', 'Bitbucket', 'Docker', 
    'Kubernetes', 'Jenkins', 'Travis CI', 'CircleCI', 'AWS', 'Azure', 'Google Cloud', 'Heroku', 'Firebase', 'Netlify', 
    'Vercel', 'Terraform', 'Ansible', 'Puppet', 'Chef', 'Nagios', 'Zabbix', 'Prometheus', 'Grafana', 'Splunk', 
    'ElasticSearch', 'Kibana', 'Logstash', 'Hadoop', 'Spark', 'Kafka', 'RabbitMQ', 'ActiveMQ', 'Redis', 'Memcached', 
    'Varnish', 'Nginx', 'Apache', 'Tomcat', 'Jetty', 'IIS', 'Lighttpd', 'HAProxy', 'Load Balancing', 'CDN', 'CloudFront', 
    'Fastly', 'Akamai', 'SEO', 'SEM', 'PPC', 'Google Analytics', 'Google Tag Manager', 'Hotjar', 'Crazy Egg', 
    'Mixpanel', 'Optimizely', 'VWO', 'AB Testing', 'Usability Testing', 'User Research', 'User Personas', 
    'Customer Journey Mapping', 'Wireframing', 'Prototyping', 'Figma', 'Sketch', 'Adobe XD', 'InVision', 'Marvel App', 
    'Balsamiq', 'Axure', 'Framer', 'Principle', 'Flinto', 'Webflow', 'Zeplin', 'Abstract', 'InDesign', 'Illustrator', 
    'Photoshop', 'After Effects', 'Premiere Pro', 'Final Cut Pro', 'DaVinci Resolve', 'Cinema 4D', 'Maya', 'Blender', 
    '3ds Max', 'Unity', 'Unreal Engine', 'Godot', 'Corona SDK', 'Cocos2d', 'GameMaker', 'Construct', 'Stencil', 
    'Adobe Animate', 'Spine', 'Live2D', 'Moho', 'CelAction', 'Toon Boom', 'Harmony', 'Pencil2D', 'Synfig', 'Tupi', 
    'OpenToonz', 'Clip Studio Paint', 'Krita', 'MediBang Paint', 'FireAlpaca', 'MyPaint', 'ArtRage', 'Corel Painter', 
    'CorelDRAW', 'Affinity Designer', 'Affinity Photo', 'Procreate', 'Concepts', 'Sketchbook', 'PaintTool SAI', 
    'Krita', 'GIMP', 'Inkscape', 'Canva', 'Snappa', 'Piktochart', 'Venngage', 'Visme', 'Easel.ly', 'Infogram', 'Datawrapper'
  ];
  useEffect(() => {
    const profileSkillsElement = document.querySelector('.profile-skills');
    if (skills.length > 0) {
      profileSkillsElement.classList.add('expanded');
    } else {
      profileSkillsElement.classList.remove('expanded');
    }
  }, [skills]);
  const handleAddSkill = () => {
    const newSkills = skillInput.split(',').map(skill => skill.trim()).filter(skill => skill && !skills.includes(skill));
    if (newSkills.length + skills.length <= 20) {
      setSkills([...skills, ...newSkills]);
      setSkillInput('');
      setFilteredSkills([]);
    }
  };

  const handleRemoveSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSkillInput(value);
    if (value.trim() !== '' && skills.length < 20) {
      setFilteredSkills(allSkills.filter(skill =>
        skill.toLowerCase().includes(value.toLowerCase())
      ));
    } else {
      setFilteredSkills([]);
    }
  };
  return (
    <div className="container mt-4 keyskills-container">
    <div className="profile-skills">
      <div className="d-flex justify-content-between align-items-center skills-header mb-3">
        <h5>Key Skills</h5>
        {showInput ? (
            <Button  className='skills-save-btn' onClick={() => setShowInput(false)}>
              Save
            </Button>
          ) : (
            <i
              className="fa fa-pen"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowInput(true)}
            ></i>
          )}
      </div>
      {showInput && skills.length < 20 && (
        <InputGroup className="mb-3 slide-in">
          <Input
            type="text"
            placeholder="Enter skills separated by commas"
            value={skillInput}
            onChange={handleInputChange}
            onFocus={() => {
              if (skills.length < 20) {
                setFilteredSkills(allSkills.filter(skill =>
                  skill.toLowerCase().includes(skillInput.toLowerCase())
                ));
              }
            }}
          />
          <Button color="primary" onClick={handleAddSkill}>
            Add Skill
          </Button>
          {filteredSkills.length > 0 && (
            <div className="skills-dropdown show">
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className="dropdown-item"
                  onClick={() => {
                    const newSkills = [...skills, skill].filter((v, i, a) => a.indexOf(v) === i);
                    if (newSkills.length <= 20) {
                      setSkills(newSkills);
                      setSkillInput('');
                      setFilteredSkills(allSkills.filter(s => s.toLowerCase().includes(skillInput.toLowerCase())));
                    }
                  }}
                >
                    {skill}
                  </div>
                ))}
              </div>
            )}
          </InputGroup>
        )}
        <div className="skills-list d-flex flex-wrap">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              <span>{skill}</span>
              <Button close onClick={() => handleRemoveSkill(index)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyskills;