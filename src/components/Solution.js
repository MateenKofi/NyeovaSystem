import React from 'react';
import windows from '../assets/images/solutions/windows.svg';
import linux from '../assets/images/solutions/linux.svg';
import aws from '../assets/images/solutions/aws.svg';
import azuredevops from '../assets/images/solutions/azure-devops.svg';
import visualStudio from '../assets/images/solutions/visual-studio.svg';
import microsoft from '../assets/images/solutions/microsoft-365.svg';
import htmlcss from '../assets/images/solutions/html-css.svg';
import javascript from '../assets/images/solutions/javascript.svg';
import typescript from '../assets/images/solutions/typescript.svg';
import ios from '../assets/images/solutions/ios.svg';
import msOffice from '../assets/images/solutions/microsoft-office.svg';
import enterpriseMobility from '../assets/images/solutions/enterprise-mobility.svg';
import LetsTalk from './LetsTalk';

const Solution = () => {
  return (
    <div className="mt-36">
      <section className="flex flex-col items-center">
        <header className="flex flex-col items-center text-center mt-2 mb-12">
          <h3>Our Solutions</h3>
        </header>
        <p className="md:mt-2 text-xl">Developer Network Offering</p>
        <div className="grid grid-cols-2 md:grid-cols-3 w-4/5 gap-10 my-6">
          <img
            alt="windows"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={windows}
          />
          <img
            alt="linux"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={linux}
          />
          <img
            alt="aws"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={aws}
          />
          <img
            alt="azure-devops"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={azuredevops}
          />
          <img
            alt="visual-studio"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={visualStudio}
          />
          <img
            alt="microsoft-365"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={microsoft}
          />
          <img
            alt="html-css"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={htmlcss}
          />
          <img
            alt="javascript"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={javascript}
          />
          <img
            alt="typescript"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={typescript}
          />
          <img
            alt="ios"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={ios}
          />
          <img
            alt="microsoft-office"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={msOffice}
          />
          <img
            alt="enterprise-mobility"
            loading="lazy"
            width="500"
            height="500"
            decoding="async"
            data-nimg="1"
            className="drop-shadow-sm"
            src={enterpriseMobility}
          />
        </div>
        <div className="w-4/5 mt-16">
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2">Data Center</h4>
            <p className="md:w-1/2">
              The data center is the beating heart of an increasing number of
              enterprises today. As a result of globalization, this data must be
              accessible at any time and from any location. Is your IT
              infrastructure up to the task of supporting the increasing data
              transfer speeds?Some enterprise IT systems require a presence in
              your corporate data center and cannot be migrated to the cloud.
              You must ensure that the applications in your data center are
              safe, quick, agile, and resilient. By utilizing the resources
              available today, Nyeova Systems can assist you in developing the
              correct size modern data center.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2">Data Storage</h4>
            <p className="md:w-1/2">
              Your company&#x27;s decisions are all based on facts. If data is
              inaccessible, outmoded, or not secured, it will have an impact on
              business outcomes and may even jeopardize your company&#x27;s
              existence. With the passage of time, the need to manage data
              storage becomes more critical. Nyeova Systems has the expertise to
              help businesses of all sizes with the study, design, and
              implementation of storage systems that best match their needs.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2">Cloud Services</h4>
            <p className="md:w-1/2">
              Many businesses are compelled to shift applications and services
              to the cloud in order to reduce IT hardware costs and overhead.
              Cloud services can be an appealing alternative to buying or
              replacing hardware. Nyeova Systems can assist you in developing a
              long-term cloud strategy. We can help you figure out the best
              method to manage and integrate your cloud services with your
              on-premises system, avoiding the potentially exorbitant expense of
              cloud services over time. Let us help you be more successful in
              the cloud, whether it&#x27;s a professional services engagement to
              migrate your e-mail to the cloud or support in the selection and
              deployment of a cloud management solution.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2">IT Security</h4>
            <p className="md:w-1/2">
              For a company that relies on the accuracy and accessibility of its
              data, installing an antivirus application and maintaining a basic
              firewall is insufficient protection. You might be startled by the
              amount of ways an ill-intentioned hacker could hurt your firm.IT
              security should be a key priority for today&#x27;s IT decision
              makers. If the data is not available, corrupted, or compromised,
              speed, uptime, and analytics are meaningless. The safety of the
              data is usually your top consideration. Today&#x27;s cyber danger
              can infect your system from any location. Given the new threat
              model, edge firewalls and anti-virus are grossly inadequate. Cyber
              security is a constant challenge and Nyeova System is here to
              help.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center mb-20">
            <h4 className="md:w-1/2">Networking</h4>
            <p className="md:w-1/2">
              Today&#x27;s networking is as basic as it was a few years ago.
              Your IT department must transition apps and services from
              development to operations, as well as from on-premises to cloud.
              The impact of virtualization on security necessitates an adaptive
              network, and today&#x27;s software-defined networks (SDN) are the
              most effective solution to tackle these new problems. Nyeova
              Systems can help you modernize the backbone of your I.T.
              infrastructure today, whether it&#x27;s creating your cloud
              integrated global DNS or LAN and datacenter network design with
              micro segmentation.
            </p>
          </div>
        </div>
      <LetsTalk/>
      </section>
    </div>
  );
};

export default Solution;
