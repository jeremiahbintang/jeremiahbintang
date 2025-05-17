export const degrees = [
  {
    title: "M.Sc. in Computational Science and Engineering (BGCE)",
    detail: "Technical University of Munich, Oct 2022 - Oct 2025, 1.5/1.0",
    accordions: [
      {
        title: "Areas studied",
        content: (
          <ul className="list-disc list-inside">
            <li>Numerical analysis and scientific computing</li>
            <li>Machine learning</li>
            <li>High performance computing</li>
            <li>Mathematical biology</li>
            <li>Quantum computing</li>
          </ul>
        ),
      },
      {
        title: "Technology",
        content: (
          <ul className="list-disc list-inside">
            <li>C++ (openMP, MPI, CUDA)</li>
            <li>Python (numpy, scipy, matplotlib)</li>
            <li>Matlab</li>
          </ul>
        ),
      },
      {
        title: "Thesis",
        content: (
          <div className="space-y-3">
            <p className="text-xl">
              Unsupervised learning of the relationship between cancer samples
              from chromosome specific distances of copy number distributions
            </p>

            <p>
              As a mutation called the somatic copy number alteration (SCNA) has
              been shown to highly correlate with oncogenesis, we investigated
              how SCNA profiles of cancer samples can be utilised to identify
              the subtype of cancers using a distance called the Wasserstein
              distance. The distance is used primarily to measure the
              dissimilarity of two different probability distributions, but it
              can be generalised to include any arbitrary finite distributions.
            </p>
            <p>
              We sourced the dataset from a Python library called CNSistent,
              calculated the distances with varying combination of
              hyper-parameters, visualised using UMAP and MDS, and clustered
              with HDBSCAN, K-Means, and GMM. The resulting distance matrix is
              also used to create an outlier detection method.
            </p>
            <p>
              The results show that Wasserstein distance can capture these
              differences. Although the performance is not that different with
              the benchmark, i.e. when the SCNA profile is used directly as the
              input feature vector for UMAP and MDS, the resulting method
              creates a more interpretable approach to analyse the differences
              between these profiles.
            </p>
            <p>Built in Python</p>
          </div>
        ),
      },
      {
        title: "Bavarian Graduate School of Computational Engineering (BGCE)",
        content: (
          <div>
            An honours program that puts together the top students of three
            different programs to do 30 ECTS worth of activities to nurture the
            relevant skills for a scientific career. This includes:
            <ul className="list-disc list-inside">
              <li>Soft skills (10 ECTS), e.g. writing, project management</li>
              <li>
                Scientific skills (10 ECTS), e.g. C++ design patterns, research
                presentation, further GPU programming
              </li>
              <li>
                Team project (10 ECTS), in coordination with an industry leader
                to work on a research project on microwave imaging
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    title: "B.Sc. in Engineering Physics",
    detail: "Bandung Institute of Technology, Aug 2013 - Oct 2017, 3.76/4.0",
    accordions: [
      {
        title: "Areas studied",
        content: (
          <ul className="list-disc list-inside">
            <li>Fundamental physics</li>
            <li>Instrumentation and control</li>
            <li>Sensors and actuators</li>
            <li>Building physics</li>
            <li>Medical physics</li>
            <li>Heat and fluid simulation</li>
          </ul>
        ),
      },
      {
        title: "Technology",
        content: (
          <ul className="list-disc list-inside">
            <li>Matlab</li>
          </ul>
        ),
      },
      {
        title: "Thesis",
        content: (
          <div className="space-y-3">
            <p className="text-xl">
              Building application package for simulating fluid flows in an
              enclosed space
            </p>
            <p>
              Computing fluid dynamics is a highly complex problem. The research
              group was planning to develop a measuring device for heat capacity
              of windows that entails a specific air circulation in an enclosed
              system. We extended the lid-driven cavity problem to three
              dimensional and developed an application package that can simulate
              the airflow with various boundary cases.
            </p>
            <p>Built in Matlab </p>
          </div>
        ),
      },
    ],
  },
];

export const jobs = [
  {
    title: "MSAID GmbH",
    detail:
      "Working student in DevOps, Garching b. München, Germany, Apr 2023 - Now",
    accordions: [
      {
        title: "Responsibilites",
        content: (
          <ul className="list-disc list-inside">
            <li>Developed tools to expedite development process</li>
            <li>Containerised and packaged softwares</li>
          </ul>
        ),
      },
      {
        title: "Technology",
        content: (
          <div className="flex flex-col gap-10">
            <div>
              Tools:
              <ul className="list-disc list-inside">
                <li>Docker</li>
                <li>Helm</li>
                <li>Kubernetes (k3s)</li>
                <li>Terraform</li>
                <li>Ansible</li>
                <li>minIO</li>
                <li>Apache Hive</li>
                <li>Apache Iceberg</li>
                <li>Trino</li>
              </ul>
            </div>
            <div>
              Languages:
              <ul className="list-disc list-inside">
                <li>Go</li>
                <li>Bash</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Kinobi",
    detail:
      "Freelancer in Full-stack Web Development, Jakarta, Indonesia, Jul - Nov 2022",
    accordions: [
      {
        title: "Responsibilites",
        content: (
          <ul className="list-disc list-inside">
            <li>
              Handled full-stack development with other three developers for an
              EduTech platform
            </li>
            <li>
              Integrated third party APIs to source for job openings in job
              board
            </li>
          </ul>
        ),
      },
      {
        title: "Technology",
        content: (
          <div className="flex flex-col gap-10">
            <div>
              Tools:
              <ul className="list-disc list-inside">
                <li>Vue.js / Nuxt.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              Languages:
              <ul className="list-disc list-inside">
                <li>Typescript</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "Ravenry",
    detail:
      "Full-timer in Full-stack Web Development and Product Management, Jakarta, Indonesia, Jul 2018 - Jun 2022",
    accordions: [
      {
        title: "Responsibilites",
        content: (
          <ul className="list-disc list-inside">
            <li>
              Mainly handled full-stack web development for freelancer
              management platform for on-desk research activities
            </li>
            <li>
              Managed the early product management for the first two years
            </li>
            <li>
              A short stint in growth hacking and marketing; one of the output
              is prototyping a freelancer storefront product now called Solos
            </li>
          </ul>
        ),
      },
      {
        title: "Technology",
        content: (
          <div className="flex flex-col gap-10">
            <div>
              Tools:
              <ul className="list-disc list-inside">
                <li>React / Next.js</li>
                <li>Express.js</li>
                <li>Flask</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Wordpress</li>
                <li>GCP</li>
              </ul>
            </div>
            <div>
              Languages:
              <ul className="list-disc list-inside">
                <li>Javascript</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    title: "LabMath-Indonesia",
    detail: "Research intern, Bandung, Indonesia, Oct 2017 - Jan 2018",
    accordions: [
      {
        title: "Responsibilites",
        content: (
          <ul className="list-disc list-inside">
            <li>Researched mathematical model for oceanic waves </li>
          </ul>
        ),
      },
      {
        title: "Technology",
        content: (
          <ul className="list-disc list-inside">
            <li>Matlab</li>
          </ul>
        ),
      },
    ],
  },
];
