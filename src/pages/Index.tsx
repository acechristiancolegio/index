import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const skills = ["PHP", "WordPress", "HTML", "CSS", "Basic JS"];
  
const projects = [
  {
    title: "E-commerce Platform",
    description: "Custom WordPress e-commerce solution with payment integration",
    image: "/placeholder.svg",
    link: "https://ph.puma.com/s" // external site
  },
  {
    title: "Corporate Website",
    description: "Modern responsive website for financial services company",
    image: "/placeholder.svg",
    link: "http://localhost:8081/" // Website 1 (local project)
  },
  {
    title: "Portfolio Site",
    description: "Creative portfolio website for digital artist",
    image: "/placeholder.svg",
    link: "http://localhost:5174/" // Website 2 (local project)
  },
  // atbp...
];


  const services = [
    {
      title: "Web Design",
      description: "Custom website design that reflects your brand and engages your audience."
    },
    {
      title: "WordPress Development",
      description: "Professional WordPress websites built for performance and scalability."
    },
    {
      title: "Site Optimization",
      description: "Improve your website's speed, SEO, and user experience."
    },
    {
      title: "Responsive Design",
      description: "Ensure your website looks perfect on all devices and screen sizes."
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online store setup with secure payment processing."
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing website maintenance, updates, and technical support."
    }
  ];

  const testimonials = [
    {
      quote: "Ace delivered an exceptional website that exceeded our expectations. Professional, timely, and highly skilled.",
      name: "Sarah Johnson",
      role: "Marketing Director"
    },
    {
      quote: "Outstanding work on our e-commerce platform. The site is fast, beautiful, and easy to manage.",
      name: "Michael Chen",
      role: "Business Owner"
    },
    {
      quote: "Highly recommend Ace for WordPress development. Great communication and excellent results.",
      name: "Emily Rodriguez",
      role: "Creative Director"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-foreground">Ace</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-text-emphasis transition-colors">Home</a>
              <a href="#about" className="text-foreground hover:text-text-emphasis transition-colors">About</a>
              <a href="#work" className="text-foreground hover:text-text-emphasis transition-colors">Work</a>
              <a href="#services" className="text-foreground hover:text-text-emphasis transition-colors">Services</a>
              <a href="#contact" className="text-foreground hover:text-text-emphasis transition-colors">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32 bg-gradient-to-br from-background to-surface-subtle">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
            Ace Christian — Web Designer & WordPress Developer
          </h1>
          <p className="text-xl text-text-subtle mb-8 max-w-2xl mx-auto">
            Creating beautiful, functional websites that help businesses grow and succeed online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#work">View Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About Me</h2>
              <p className="text-text-subtle leading-relaxed">
                I'm a passionate web designer and WordPress developer with over 5 years of experience 
                creating digital solutions that make a difference. I specialize in building responsive, 
                user-friendly websites that not only look great but perform exceptionally well.
              </p>
              <p className="text-text-subtle leading-relaxed">
                My approach combines clean design principles with robust development practices to 
                deliver websites that drive results for businesses of all sizes.
              </p>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Skills</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {skills.map((skill, index) => (
                    <li key={index} className="text-text-subtle flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-96 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-text-subtle">Photo Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Recent Work</h2>
            <p className="text-text-subtle max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in web design and WordPress development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted flex items-center justify-center rounded-t-lg">
                    <span className="text-text-subtle">Project Image</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-text-subtle mb-4">{project.description}</p>
                    <Button variant="outline" size="sm" asChild>
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    Preview
  </a>
</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Services</h2>
            <p className="text-text-subtle max-w-2xl mx-auto">
              I offer a comprehensive range of web development services to help your business succeed online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-text-subtle">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">What Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <blockquote className="text-text-subtle italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-text-subtle text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-surface-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-text-subtle mb-8">
              Ready to start your next project? Let's discuss how I can help bring your vision to life.
            </p>
            
            <Card className="text-left mb-8">
              <CardContent className="p-8">
                <form action="mailto:acechristiancolegio@gmail.com" method="post" encType="text/plain">
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" type="text" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" rows={5} required />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
                <p className="text-sm text-text-subtle mt-4 text-center">
                  Note: Clicking "Send Message" will open your email client with a pre-filled message.
                </p>
              </CardContent>
            </Card>
            
            <div className="text-center">
              <p className="text-text-subtle mb-2">Or email me directly:</p>
              <a 
                href="mailto:acechristiancolegio@gmail.com" 
                className="text-primary hover:underline font-medium"
              >
                acechristiancolegio@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Ace Christian. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#home" className="hover:underline">Back to Top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;