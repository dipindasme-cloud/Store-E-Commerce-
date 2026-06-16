import Container from "@/components/ui/Container";

const team = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&h=400",
  },
  {
    name: "Maya Rodriguez",
    role: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&h=400",
  },
  {
    name: "James Okonkwo",
    role: "Head of Product",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&h=400",
  },
  {
    name: "Priya Sharma",
    role: "Athlete Relations",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&h=400",
  },
];

export default function AboutTeam() {
  return (
    <section className="section">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-caption font-medium uppercase tracking-widest text-muted-foreground">
            Our Team
          </span>
          <h2 className="mt-4 text-h2 font-semibold tracking-tight">
            Meet the People Behind the Brand
          </h2>
          <p className="mt-3 text-body-md text-muted-foreground">
            A passionate crew of athletes, designers, and problem-solvers.
          </p>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center">
              <div className="h-40 w-40 overflow-hidden rounded-full bg-muted">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-h4 font-semibold">{member.name}</h3>
              <p className="mt-1 text-body-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
