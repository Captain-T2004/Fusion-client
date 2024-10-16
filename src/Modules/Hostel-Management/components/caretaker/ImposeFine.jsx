import React, { useState } from "react";
import {
  Box,
  Text,
  Paper,
  Group,
  Avatar,
  Button,
  Stack,
  Flex,
  Select,
  Card,
  TextInput,
  NumberInput,
  Textarea,
} from "@mantine/core";

// Sample student data
const students = [
  { id: "1", name: "Vishal Keshari", hall: "Hall-2" },
  { id: "2", name: "Tushar Sharma", hall: "Hall-1" },
  { id: "3", name: "Akshay Behl", hall: "Hall-3" },
  { id: "4", name: "Ayodhya", hall: "Hall-2" },
  { id: "5", name: "Rohit Singh", hall: "Maa Saraswati Hostel" },
];

export default function ImposeFine() {
  const [selectedHall, setSelectedHall] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [fineAmount, setFineAmount] = useState(0);
  const [fineDetails, setFineDetails] = useState("");

  const handleHallChange = (value) => {
    setSelectedHall(value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.currentTarget.value);
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
  };

  const handleImposeFine = () => {
    console.log(`Fine imposed on ${selectedStudent.name}`);
    console.log(`Amount: ${fineAmount}`);
    console.log(`Details: ${fineDetails}`);
    // Reset form fields after imposing fine
    setFineAmount(0);
    setFineDetails("");
    setSelectedStudent(null);
  };

  // Filter students by selected hall and search term
  const filteredStudents = students.filter(
    (student) =>
      (!selectedHall || student.hall === selectedHall) &&
      student.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.colors.gray[0],
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
      })}
    >
      <Text size="xl" weight={500} mb="md">
        Impose Fine
      </Text>

      {/* Dropdown for selecting a hall */}
      <Select
        label="Filter by Hostel"
        placeholder="Select a hostel"
        data={[
          { value: "Hall-1", label: "Hall-1" },
          { value: "Hall-2", label: "Hall-2" },
          { value: "Hall-3", label: "Hall-3" },
          { value: "Hall-4", label: "Hall-4" },
          { value: "Hall-5", label: "Hall-5" },
          { value: "Maa Saraswati Hostel", label: "Maa Saraswati Hostel" },
        ]}
        value={selectedHall}
        onChange={handleHallChange}
        mb="md"
      />

      {/* Search bar to search students */}
      <TextInput
        label="Search Student"
        placeholder="Enter student name"
        value={searchTerm}
        onChange={handleSearchChange}
        mb="md"
      />

      {/* List of filtered students */}
      <Stack spacing="md">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((student) => (
            <Paper key={student.id} p="md" withBorder>
              <Flex align="center" justify="space-between">
                <Group spacing="md" noWrap>
                  <Avatar color="cyan" radius="xl">
                    {student.name[0]}
                  </Avatar>
                  <Text weight={500} size="sm" lineClamp={1}>
                    {student.name}
                  </Text>
                  <Text color="dimmed" size="sm">
                    {student.hall}
                  </Text>
                </Group>
                <Button
                  variant="outline"
                  size="xs"
                  onClick={() => handleStudentSelect(student)}
                >
                  Select
                </Button>
              </Flex>
            </Paper>
          ))
        ) : (
          <Text>No students found.</Text>
        )}
      </Stack>

      {/* Fine Imposing Form */}
      {selectedStudent && (
        <Card shadow="sm" p="lg" mt="md">
          <Text weight={500} size="lg" mb="md">
            Impose Fine on {selectedStudent.name}
          </Text>
          <Text size="sm" color="dimmed" mb="md">
            Hall: {selectedStudent.hall}
          </Text>

          <NumberInput
            label="Fine Amount"
            placeholder="Enter fine amount"
            value={fineAmount}
            onChange={setFineAmount}
            min={0}
            mb="md"
          />

          <Textarea
            label="Fine Details"
            placeholder="Enter fine details"
            value={fineDetails}
            onChange={(event) => setFineDetails(event.currentTarget.value)}
            mb="md"
          />

          <Button color="green" fullWidth onClick={handleImposeFine}>
            Impose Fine
          </Button>
        </Card>
      )}
    </Box>
  );
}
