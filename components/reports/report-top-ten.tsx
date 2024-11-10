import { Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, } from "@mui/material";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { Student } from "../constants/types/student.type";
import { getRequest } from "../helpers/api-requests";
import { FlexSpaceBetweenColumn } from "../styled-components";

const CircleChart = dynamic(() => import("../../components/charts/circle-chart"), {
  ssr: false,
});

export default function ReportDetailsForm() {
  const [studentsList, setStudentsList] = useState<Student[]>([]);

  const setUpData = () => {
    getRequest(`/students/top/groupA`)
      .then((students) => {
        console.log(students);
        setStudentsList(students);
      })
      .catch(() => { });
  };

  useEffect(() => {
    setUpData();
  }, []);

  return (
    <FlexSpaceBetweenColumn>
      <CircleChart />

      {studentsList && (
        <Card sx={{ marginTop: '1rem', minWidth: 700 }}>
          <CardHeader title="TOP 10 STUDENTS IN GROUP A" />
          <CardContent>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Student ID</TableCell>
                    <TableCell>Math</TableCell>
                    <TableCell>Physics</TableCell>
                    <TableCell>Chemistry</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentsList.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.id}</TableCell>
                      <TableCell>{student.math}</TableCell>
                      <TableCell>{student.physics}</TableCell>
                      <TableCell>{student.chemistry}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      )}
    </FlexSpaceBetweenColumn>
  );
}