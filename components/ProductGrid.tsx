import React from "react";
import Image from "next/image";
import Link from "next/link"

const projects = [
  {
    id: 1,
    title: "Aora",
    category: "Development",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1000&fit=crop",
    bgColor: "bg-amber-100",
  },
  {
    id: 2,
    title: "Code Screenshot",
    category: "Development & Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    bgColor: "bg-pink-200",
  },
  {
    id: 3,
    title: "Mobile App",
    category: "UI/UX Design",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=1000&fit=crop",
    bgColor: "bg-gray-200",
  },
  {
    id: 4,
    title: "Web Platform",
    category: "Full Stack",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    bgColor: "bg-green-200",
  },
];

export default function ProjectGrid() {
  return (
    <div className="min-h-screen bg-background text-primary py-10">
      {/* Wrapper for global hover dim */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 max-w-7xl relative group mb-16">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`
              cursor-pointer transition-all duration-500
              ${index % 2 == 1 ? 'md:mt-14' : ''}
              group-hover:opacity-50 hover:!opacity-100
            `}
          >
            {/* Card */}
            <div
              className={`${project.bgColor} rounded-3xl py-4 md:p-14 relative overflow-hidden`}
            >
              {/* Image container */}
              <div className="relative w-full aspect-3/2 overflow-hidden rounded-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  height={400}
                  width={600}
                  className="w-full h-full object-cover shadow-sm transform transition-transform duration-700 ease-in-out hover:scale-105"
                />
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 flex justify-between items-end">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-secondary">{project.category}</p>
              </div>
              <span className="text-secondary font-medium">{project.year}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center items-center">
        <Link href='/projects'>
        <button className="px-10 py-3 rounded-full border border-gray-400 text-md text-foreground hover:bg-foreground hover:text-background transition">
            View All Projects
        </button>
        </Link>
      </div>
    </div>
  );
}
