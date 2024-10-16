import React, { useState } from "react";
import { Group, Text, Box, Container } from "@mantine/core";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import ManageLeaveRequest from "./caretaker/ManageLeaverequest";
import ManageGuestRoomRequest from "./caretaker/MangeGuestRoom";
import ManageFines from "./caretaker/ManageFines";
import ImposeFine from "./caretaker/ImposeFine";

const sections = [
  "Manage Leave Request",
  "Impose Fine",
  "Manage Imposed Fine",
  "Mange Guest Room Request",
  "Mange Staff Schedule",
  "Student Allotment",
];
const subSections = {
  Leave: ["Leave Form", "Leave Status"],
};

// Create a map of components for each section
const sectionComponents = {
  "Manage Leave Request": ManageLeaveRequest,
  "Mange Guest Room Request": ManageGuestRoomRequest,
  "Manage Imposed Fine": ManageFines,
  "Impose Fine": ImposeFine,

  // Add other components here for different sections if needed
  // 'My Fine': MyFineComponent,
  // 'Leave': LeaveComponent,
  // etc.
};

export default function SectionNavigationCaretaker() {
  const [activeSection, setActiveSection] = useState("Manage Leave Request");

  // Get the component for the active section
  const ActiveComponent = sectionComponents[activeSection];

  return (
    <Container size="xl" p="xs">
      <Group spacing="xs" style={{ overflowX: "auto", padding: "8px 0" }}>
        <CaretLeft size={20} weight="bold" color="#718096" />
        {sections.map((section, index) => (
          <React.Fragment key={section}>
            <Text
              size="sm"
              color={activeSection === section ? "#4299E1" : "#718096"}
              style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </Text>
            {index < sections.length - 1 && (
              <Text color="#CBD5E0" size="sm">
                |
              </Text>
            )}
          </React.Fragment>
        ))}
        <CaretRight size={20} weight="bold" color="#718096" />
      </Group>

      {subSections[activeSection] && (
        <Group spacing="xs" mt="xs">
          {subSections[activeSection].map((subSection, index) => (
            <React.Fragment key={subSection}>
              <Text
                size="sm"
                color="#4299E1"
                style={{ cursor: "pointer", whiteSpace: "nowrap" }}
              >
                {subSection}
              </Text>
              {index < subSections[activeSection].length - 1 && (
                <Text color="#CBD5E0" size="sm">
                  |
                </Text>
              )}
            </React.Fragment>
          ))}
        </Group>
      )}

      <br />
      {ActiveComponent ? (
        <Box
          style={{
            width: "100%",
            height: "calc(85vh - 56px)",
            overflowY: "auto",
          }}
        >
          <ActiveComponent />
        </Box>
      ) : (
        <Text>Content for {activeSection}</Text>
      )}
    </Container>
  );
}
