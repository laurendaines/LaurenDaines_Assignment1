using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaurenDaines_Assignment1.Models
{
    public class GradeModel
    {
        [Range(0, 100, ErrorMessage = "Assignments: Number must be between 0 and 100")]
        public double Assignments { get; set; }
        [Range(0, 100, ErrorMessage = "Group Project: Number must be between 0 and 100")]
        public double GroupProject { get; set; }
        [Range(0, 100, ErrorMessage = "Quizzes: Number must be between 0 and 100")]
        public double Quizzes { get; set; }
        [Range(0, 100, ErrorMessage = "Exams: Number must be between 0 and 100")]
        public double Exams { get; set; }
        [Range(0, 100, ErrorMessage = "INTEX: Number must be between 0 and 100")]
        public double Intex { get; set; }
    }
}
