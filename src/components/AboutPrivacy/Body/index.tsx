export const Body = () => {
  return (
    <div className="mx-auto w-full bg-white px-4 py-20 lg:px-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
        <div className="space-y-4 border-l border-[#252423] pl-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C]">Introduction</h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            Top Notch Group, LLC is committed to protecting the privacy and
            security of our clients' data. This policy outlines our approach to
            data privacy and the measures we take to safeguard sensitive
            information. By engaging our services, clients agree to the terms
            and practices described in this policy.
          </p>
        </div>

        <div className="space-y-4 border-l border-[#252423] pl-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Data Collection and Usage
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            We collect and process the data necessary to deliver our IT services
            effectively. This may include personal information such as names,
            contact details, and technical data related to our clients' IT
            infrastructure and systems. Data obtained through the commission of
            services shall be used for diagnostic purposes only, and no
            information will be shared with third parties aside from our
            approved consultants and vendors list (see below).
          </p>
        </div>

        <div className="space-y-4 border-l border-[#252423] pl-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Data Custody and Security
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            Industry-standard procedures have been implemented to implement
            stringent security measures to protect client data from unauthorized
            access, disclosure, alteration, and destruction. These measures
            include, but are not limited to:
          </p>
          <ul className="list-inside list-disc px-4 text-[#7A7A7A]">
            <li>
              <span>Encryption:</span> Client data is stored and transmitted
              using encryption protocols to ensure confidentiality.
            </li>
            <li>
              <span>Access Controls:</span> Access to client data is limited to
              authorized personnel only, and access rights are granted based on
              the principle of least privilege.
            </li>
            <li>
              <span>Data Backups:</span> Regular data backups are performed to
              ensure data integrity and availability in the event of data loss
              or system failure.
            </li>
            <li>
              <span>Physical Security:</span> Physical access to data storage
              locations is restricted and monitored.
            </li>
          </ul>
        </div>

        <div className="space-y-4 border-l border-[#252423] pl-6">
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Data Access Controls
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            Access to client data is granted on a need-to-know basis. Employees
            undergo background checks and sign confidentiality agreements to
            protect client data. Access to client data is logged and monitored
            for security purposes.
          </p>
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Data Privacy, Storage and Retention
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            Client data is retained for the duration necessary to fulfill the
            purpose for which it was collected, in compliance with applicable
            laws and regulations. Once the data is no longer required, it will
            be securely deleted or anonymized. We integrate privacy and security
            considerations into the development and implementation of our IT
            services, applications, and processes.
          </p>
        </div>
      </div>

      <div className="mt-[60px] flex flex-col gap-10">
        <div>
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Third-Party Relationships
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            We may engage third-party vendors, partners, and consultants to
            deliver certain services on our behalf. An analysis is performed on
            their general information security posture. We ensure that they
            adhere to the same level of data protection as outlined in this
            policy through contractual agreements.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Response to Breach or Compromise
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            In the event of a data breach, a comprehensive incident response
            plan is utilized, commensurate with our insurance policies and
            industry regulations. We will promptly assess the breach, take the
            necessary steps to contain and mitigate its impact, and notify
            affected clients and regulatory authorities as required by
            applicable laws.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Compliance and Legal Requirements
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            We are committed to complying with all applicable data protection
            laws and regulations, including but not limited to GDPR, CCPA, and
            any other relevant regional or industry-specific requirements.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Employee Awareness Training and Continuing Education
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            All employees undergo regular data privacy and security training to
            stay aware of the latest policies, procedures, and best practices
            for protecting client data.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#1C1C1C]">
            Accountability and Periodic Review
          </h3>
          <p className="leading-relaxed text-[#7A7A7A]">
            Our privacy officer oversees the implementation and enforcement of
            this policy and addresses data privacy-related concerns. This policy
            will be reviewed annually and updated as necessary to stay in line
            with changing regulations, technologies, and business practices.
          </p>
        </div>

        <div>
          <p className="leading-relaxed text-[#7A7A7A]">
            For any questions or concerns regarding our Data Privacy and Custody
            Policy, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};
