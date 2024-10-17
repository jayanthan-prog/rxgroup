import React, { useState } from 'react'
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Progress } from "../components/ui/progress"
import { Badge } from "../components/ui/badge"
import { ArrowLeft, Camera, Mail, Phone, Search, X, Info } from "lucide-react"
import '../styles/doctorprofile.css'

export default function DoctorProfile() {
  const [places, setPlaces] = useState(['Apollo hospitals', 'Kevin clinic'])
  const [specialties, setSpecialties] = useState(['Gynecologist'])

  const removePlace = (place: string) => {
    setPlaces(places.filter(p => p !== place))
  }

  const removeSpecialty = (specialty: string) => {
    setSpecialties(specialties.filter(s => s !== specialty))
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
            <h1 className="text-xl font-semibold">Profile</h1>
          </div>
          <div className="flex items-center space-x-2">
            <Progress value={75} className="w-48" />
            <span className="text-sm font-medium text-green-500">75% Completed!</span>
          </div>
          <Button variant="outline" className="border-teal-500 text-teal-500 hover:bg-teal-50">UPDATE</Button>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-6 bg-teal-50">
            <div className="relative">
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Profile picture"
                className="w-48 h-48 rounded-full mx-auto"
              />
              <Button size="icon" className="absolute bottom-0 right-1/4 bg-teal-500 hover:bg-teal-600">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="text-sm">kevinevans@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-sm">+91 9840426348</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">kevinevans@gmail.com</span>
                <X className="h-4 w-4 text-red-500" />
              </div>
              <div className="mt-2 text-xs text-gray-500">Last synced: 15 May 2023, 06:00pm</div>
            </div>
          </div>
          <div className="md:w-2/3 p-6">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Name <span className="text-red-500">*</span>
                </label>
                <Input id="name" defaultValue="Kevin Evans" className="mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="qualification">
                  Qualification <span className="text-red-500">*</span>
                </label>
                <Input id="qualification" defaultValue="MBBS, MD - Obstetrics" className="mt-1" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="working-at">
                  Working At <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input id="working-at" className="pl-8" placeholder="Hospitals, Clinics etc." />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Places Added <Badge variant="secondary">{places.length}</Badge>
                  </label>
                  <Button variant="link" className="text-red-500 text-xs">CLEAR ALL</Button>
                </div>
                <div className="mt-2 space-y-2">
                  {places.map((place, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <span>{place}</span>
                      <X className="h-4 w-4 text-gray-500 cursor-pointer" onClick={() => removePlace(place)} />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="specialty">
                  Specialty <span className="text-red-500">*</span>
                </label>
                <div className="relative mt-1">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input id="specialty" className="pl-8" placeholder="Gynecologist, Laparoscopic Surgeon" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Specialty Added <Badge variant="secondary">{specialties.length}</Badge>
                  </label>
                  <Button variant="link" className="text-red-500 text-xs">CLEAR ALL</Button>
                </div>
                <div className="mt-2 space-y-2">
                  {specialties.map((specialty, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                      <span>{specialty}</span>
                      <X className="h-4 w-4 text-gray-500 cursor-pointer" onClick={() => removeSpecialty(specialty)} />
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}