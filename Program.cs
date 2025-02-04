using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using System.Text.Json;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Background options
var backgrounds = new[] { "white", "black", "green" };

// Generate Random Math Questions
Random random = new Random();
string GenerateQuestion(out int correctAnswer)
{
    int num1 = random.Next(1, 11);
    int num2 = random.Next(1, 11);
    string[] ops = { "+", "-", "*" };
    string op = ops[random.Next(ops.Length)];
    correctAnswer = op switch
    {
        "+" => num1 + num2,
        "-" => num1 - num2,
        "*" => num1 * num2,
        _ => 0
    };
    return $"{num1} {op} {num2} = ?";
}

app.MapGet("/api/questions", () =>
{
    var questions = new object[10];
    for (int i = 0; i < 10; i++)
    {
        int correct;
        string question = GenerateQuestion(out correct);
        var answers = new int[] { correct, correct + 1, correct - 1, correct + 2 };
        Array.Sort(answers);
        questions[i] = new { Question = question, Answers = answers, Correct = correct };
    }
    return Results.Json(questions);
});

app.MapGet("/api/backgrounds", () => Results.Json(backgrounds));

app.Run();