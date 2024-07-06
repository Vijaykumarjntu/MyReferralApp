import React from 'react';
import { Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQSection() {
  return (
    <div className="mt-8">
      <Typography variant="h6" className="mb-4">
        Frequently Asked Questions
      </Typography>
      
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Do I need to have prior Product Management and Project Management experience to enroll in the program?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, the program is designed to be inclusive of all levels of experience. All topics will be covered from the basics, making it suitable for individuals from any field of work.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What is the minimum system configuration required?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* Add answer here */}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default FAQSection;