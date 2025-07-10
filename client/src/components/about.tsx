import { Code, Smartphone, Database, Trophy, Medal, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated Computer Science student with a passion for solving complex problems through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Education</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-lg text-indigo-600">Bachelor of Science in Computer Science</h4>
                <p className="text-gray-600">University of Technology • Expected 2025</p>
                <p className="text-gray-600 mt-2">GPA: 3.8/4.0</p>
                <p className="text-gray-600 mt-2">Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Experience</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-indigo-600">Software Development Intern</h4>
                  <p className="text-gray-600">TechCorp Inc. • Summer 2023</p>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• Developed responsive web applications using React and Node.js</li>
                    <li>• Collaborated with senior developers on feature implementation</li>
                    <li>• Improved application performance by 20%</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg text-indigo-600">Teaching Assistant</h4>
                  <p className="text-gray-600">University of Technology • 2022-2023</p>
                  <ul className="text-gray-600 mt-2 space-y-1">
                    <li>• Assisted students with programming assignments in Python and Java</li>
                    <li>• Conducted weekly lab sessions for 30+ students</li>
                    <li>• Graded assignments and provided constructive feedback</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <Code className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Web Development</h4>
                    <p className="text-gray-600">Building responsive, modern web applications using the latest technologies and best practices.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Smartphone className="text-cyan-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Mobile Development</h4>
                    <p className="text-gray-600">Creating cross-platform mobile applications with focus on user experience and performance.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Database className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Data Analysis</h4>
                    <p className="text-gray-600">Analyzing complex datasets to extract meaningful insights and drive decision-making.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Trophy className="text-yellow-500" size={20} />
                  <span>Dean's List - Fall 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Medal className="text-blue-500" size={20} />
                  <span>Hackathon Winner - CodeFest 2023</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-green-500" size={20} />
                  <span>AWS Cloud Practitioner Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
