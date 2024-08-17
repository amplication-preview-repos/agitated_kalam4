/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserAnswerService } from "../userAnswer.service";
import { UserAnswerCreateInput } from "./UserAnswerCreateInput";
import { UserAnswer } from "./UserAnswer";
import { UserAnswerFindManyArgs } from "./UserAnswerFindManyArgs";
import { UserAnswerWhereUniqueInput } from "./UserAnswerWhereUniqueInput";
import { UserAnswerUpdateInput } from "./UserAnswerUpdateInput";

export class UserAnswerControllerBase {
  constructor(protected readonly service: UserAnswerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: UserAnswer })
  async createUserAnswer(
    @common.Body() data: UserAnswerCreateInput
  ): Promise<UserAnswer> {
    return await this.service.createUserAnswer({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [UserAnswer] })
  @ApiNestedQuery(UserAnswerFindManyArgs)
  async userAnswers(@common.Req() request: Request): Promise<UserAnswer[]> {
    const args = plainToClass(UserAnswerFindManyArgs, request.query);
    return this.service.userAnswers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: UserAnswer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async userAnswer(
    @common.Param() params: UserAnswerWhereUniqueInput
  ): Promise<UserAnswer | null> {
    const result = await this.service.userAnswer({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: UserAnswer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUserAnswer(
    @common.Param() params: UserAnswerWhereUniqueInput,
    @common.Body() data: UserAnswerUpdateInput
  ): Promise<UserAnswer | null> {
    try {
      return await this.service.updateUserAnswer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: UserAnswer })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUserAnswer(
    @common.Param() params: UserAnswerWhereUniqueInput
  ): Promise<UserAnswer | null> {
    try {
      return await this.service.deleteUserAnswer({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
