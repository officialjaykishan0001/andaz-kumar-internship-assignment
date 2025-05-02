import { Checkbox, Flex } from '@radix-ui/themes';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDoctors } from '../features/doctors/doctorsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    modeOfConsult: [],
    experienceRange: [],
    feeRange: [],
    language: [],
    facility: [],
  });

  const handleCheckboxChange = (category, value) => {
    setFilters((prevFilters) => {
      const currentValues = prevFilters[category];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      const newFilters = { ...prevFilters, [category]: updatedValues };

      applyFilters(newFilters);
      return newFilters;
    });
  };

  const applyFilters = (filters) => {
    const query = {};

    if (filters.modeOfConsult.length > 0) {
      query.modeOfConsult = filters.modeOfConsult.join(',');
    }

    if (filters.experienceRange.includes('0-5')) {
      query.minExp = 0;
      query.maxExp = 5;
    }
    if (filters.experienceRange.includes('6-10')) {
      query.minExp = 6;
      query.maxExp = 10;
    }
    if (filters.experienceRange.includes('11-16')) {
      query.minExp = 11;
      query.maxExp = 16;
    }

    
    if (filters.feeRange.includes('100-500')) {
      query.minFee = 100;
      query.maxFee = 500;
    }
    if (filters.feeRange.includes('500-1000')) {
      query.minFee = 500;
      query.maxFee = 1000;
    }
    if (filters.feeRange.includes('1000+')) {
      query.minFee = 1000;
    }

    if (filters.language.length > 0) {
      query.language = filters.language.join(',');
    }

    if (filters.facility.length > 0) {
      query.facility = filters.facility.join(',');
    }

    dispatch(getDoctors({ ...query, page: 1, limit: 10 }));
  };

  return (
    <div>
      <div className="max-w-[240px] border border-black px-1">
        <div className="flex justify-between">
          <h1 className="font-bold">Filters</h1>
          <span onClick={() => {
            setFilters({
              modeOfConsult: [],
              experienceRange: [],
              feeRange: [],
              language: [],
              facility: [],
            });
            dispatch(getDoctors({ page: 1, limit: 10 }));
          }} className="cursor-pointer text-blue-500">clear all</span>
        </div>

        <div>
          <h1 className="font-bold">Mode of Consult</h1>
          <Flex gap="2" className="items-center">
            <Checkbox
              checked={filters.modeOfConsult.includes('Hospital Visit')}
              onCheckedChange={() => handleCheckboxChange('modeOfConsult', 'Hospital Visit')}
            />
            Hospital Visit
          </Flex>
          <Flex gap="2" className="items-center">
            <Checkbox
              checked={filters.modeOfConsult.includes('Online Consult')}
              onCheckedChange={() => handleCheckboxChange('modeOfConsult', 'Online Consult')}
            />
            Online Consult
          </Flex>
        </div>

        {/* Experience */}
        <div>
          <h1 className="font-bold">Experience (In Years)</h1>
          {['0-5', '6-10', '11-16'].map((range) => (
            <Flex gap="2" className="items-center" key={range}>
              <Checkbox
                checked={filters.experienceRange.includes(range)}
                onCheckedChange={() => handleCheckboxChange('experienceRange', range)}
              />
              {range}
            </Flex>
          ))}
        </div>

        <div>
          <h1 className="font-bold">Fees (In Rupees)</h1>
          {['100-500', '500-1000', '1000+'].map((range) => (
            <Flex gap="2" className="items-center" key={range}>
              <Checkbox
                checked={filters.feeRange.includes(range)}
                onCheckedChange={() => handleCheckboxChange('feeRange', range)}
              />
              {range}
            </Flex>
          ))}
        </div>

        <div>
          <h1 className="font-bold">Language</h1>
          {['English', 'Hindi', 'Telugu'].map((lang) => (
            <Flex gap="2" className="items-center" key={lang}>
              <Checkbox
                checked={filters.language.includes(lang)}
                onCheckedChange={() => handleCheckboxChange('language', lang)}
              />
              {lang}
            </Flex>
          ))}
        </div>

        <div>
          <h1 className="font-bold">Facility</h1>
          {['Apollo Hospital', 'Other Clinics'].map((f) => (
            <Flex gap="2" className="items-center" key={f}>
              <Checkbox
                checked={filters.facility.includes(f)}
                onCheckedChange={() => handleCheckboxChange('facility', f)}
              />
              {f}
            </Flex>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
