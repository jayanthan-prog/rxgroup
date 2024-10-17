import React, { useState } from 'react';
import { ArrowLeft, Search, ChevronRight, Trash2, X } from 'lucide-react';
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "../components/ui/dialog"

export default function AddDrugsToRxGroup() {
  const [selectedDrugs, setSelectedDrugs] = useState([
    { name: 'Paracetamol 250mg', dose: '1 - 0 - 1', time: '5 min, Daily, Before food', duration: '+ Customize' },
    { name: 'T.Razo 20mg', dose: '0 - 1/2 - 0', time: '10 min, Daily, After food', duration: '3 days,3 nos' },
    { name: 'T.Shelcal 500mg', dose: '0 - 1 - 0', time: '10 min, Daily, After food', duration: '3 days,3 nos' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [editingDrug, setEditingDrug] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteDrug = (index) => {
    setSelectedDrugs(selectedDrugs.filter((_, i) => i !== index));
  };

  const handleEditDrug = (index) => {
    setEditingDrug({ ...selectedDrugs[index], index });
    setIsModalOpen(true);
  };

  const handleSaveEdit = () => {
    if (editingDrug) {
      const updatedDrugs = [...selectedDrugs];
      updatedDrugs[editingDrug.index] = {
        name: editingDrug.name,
        dose: editingDrug.dose,
        time: editingDrug.time,
        duration: editingDrug.duration,
      };
      setSelectedDrugs(updatedDrugs);
      setIsModalOpen(false);
      setEditingDrug(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <ArrowLeft className="h-5 w-5 mr-2" />
          <h1 className="text-xl font-semibold">Rx group name - Add drugs</h1>
        </div>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">SAVE</Button>
      </div>

      <div className="flex items-center mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search drugs"
            className="pl-10 pr-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex ml-2">
          {['All', 'Drugs', 'Rx Group'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'default' : 'outline'}
              className={`mx-1 ${activeFilter === filter ? 'bg-teal-600 text-white' : 'text-gray-600'}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600">Selected drugs ({selectedDrugs.length})</p>
      </div>

      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 gap-4 p-4 bg-gray-200 font-semibold">
          <div>Drug Name</div>
          <div>Dose</div>
          <div>Time, Frequency & When</div>
          <div>Duration & Quantity</div>
        </div>
        {selectedDrugs.map((drug, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 items-center">
            <div>{drug.name}</div>
            <div className="flex items-center cursor-pointer" onClick={() => handleEditDrug(index)}>
              {drug.dose} <ChevronRight className="h-4 w-4 ml-1 text-teal-600" />
            </div>
            <div className="flex items-center cursor-pointer" onClick={() => handleEditDrug(index)}>
              {drug.time} <ChevronRight className="h-4 w-4 ml-1 text-teal-600" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center cursor-pointer" onClick={() => handleEditDrug(index)}>
                {drug.duration} <ChevronRight className="h-4 w-4 ml-1 text-teal-600" />
              </div>
              <Trash2
                className="h-5 w-5 text-red-500 cursor-pointer"
                onClick={() => handleDeleteDrug(index)}
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Drug Details</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" className="p-2">
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </DialogHeader>
          {editingDrug && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Dose</label>
                <Input
                  value={editingDrug.dose}
                  onChange={(e) => setEditingDrug({ ...editingDrug, dose: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time, Frequency & When</label>
                <Input
                  value={editingDrug.time}
                  onChange={(e) => setEditingDrug({ ...editingDrug, time: e.target.value })}
                  className="mt-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Duration & Quantity</label>
                <Input
                  value={editingDrug.duration}
                  onChange={(e) => setEditingDrug({ ...editingDrug, duration: e.target.value })}
                  className="mt-1"
                />
              </div>
              <Button onClick={handleSaveEdit} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
                Save Changes
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}